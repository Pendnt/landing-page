# render_pendant.py
#
# Usage:
#   blender --background --python render_pendant.py -- \
#       input.gltf output.png width height

import sys, os, math
import bpy
from mathutils import Vector

# 1) parse CLI args (everything after “--”)
argv = sys.argv[sys.argv.index("--") + 1:]
in_gltf, out_img, W, H = argv[0], argv[1], int(argv[2]), int(argv[3])

# 2) start with a blank slate
bpy.ops.wm.read_factory_settings(use_empty=True)

# 3) import your pendant
bpy.ops.import_scene.gltf(filepath=in_gltf)

# 4) gather all meshes and compute bounding box
meshes = [o for o in bpy.context.scene.objects if o.type == "MESH"]
if not meshes:
    print("Error: no meshes found in the GLTF.")
    sys.exit(1)

all_verts = []
for o in meshes:
    for corner in o.bound_box:
        all_verts.append(o.matrix_world @ Vector(corner))
min_v = Vector((min(v.x for v in all_verts),
                min(v.y for v in all_verts),
                min(v.z for v in all_verts)))
max_v = Vector((max(v.x for v in all_verts),
                max(v.y for v in all_verts),
                max(v.z for v in all_verts)))
center = (min_v + max_v) * 0.5
size   = (max_v - min_v).length

# 5) override materials → Principled BSDF (#111, roughness=0.4)
for o in meshes:
    mat = bpy.data.materials.new("PendMat")
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (0.066, 0.066, 0.066, 1)
    bsdf.inputs["Roughness"].default_value   = 0.4
    o.data.materials.clear()
    o.data.materials.append(mat)

# 6) world background = pure white
world = bpy.data.worlds.new("World")
bpy.context.scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes["Background"]
bg.inputs["Color"].default_value = (1, 1, 1, 1)

# 7) add a shadow‑catcher plane just beneath the pendant
bpy.ops.mesh.primitive_plane_add(
    size=size * 4,
    location=(center.x, center.y, min_v.z - 0.0005)
)
ground = bpy.context.active_object
ground.cycles.is_shadow_catcher = True

# 8) set up camera (reuse if exists)
cams = [o for o in bpy.context.scene.objects if o.type == "CAMERA"]
if cams:
    cam = cams[0]
else:
    cam_data = bpy.data.cameras.new("Camera")
    cam      = bpy.data.objects.new("Camera", cam_data)
    bpy.context.collection.objects.link(cam)
    bpy.context.scene.camera = cam

# frame the pendant in view
fov  = cam.data.angle
dist = (size * 0.5) / math.tan(fov * 0.5) * 1.2
cam.location = center + Vector((0, -dist, 0))
cam.data.clip_start = dist * 0.01
cam.data.clip_end   = dist * 10

# aim camera at center
track = cam.constraints.new("TRACK_TO")
track.target     = bpy.data.objects.new("CamTarget", None)
bpy.context.collection.objects.link(track.target)
track.target.location = center
track.track_axis     = "TRACK_NEGATIVE_Z"
track.up_axis        = "UP_Y"

# 9) add simple three‑point lighting
def add_light(name, typ, energy, offs):
    ld = bpy.data.lights.new(name, typ)
    ld.energy = energy
    obj = bpy.data.objects.new(name, ld)
    bpy.context.collection.objects.link(obj)
    obj.location = center + Vector(offs)

add_light("KeyLight",  "AREA", 800, ( size, -size,  size))
add_light("FillLight", "AREA", 300, (-size,  size,  size))
add_light("RimLight",  "AREA", 500, ( 0,      -size, -size))

# 10) render settings: cycles, resolution, output path
scene = bpy.context.scene
scene.render.engine = "CYCLES"
scene.cycles.device  = "CPU"   # or "GPU" if you have it configured
scene.render.film_transparent = False
scene.render.resolution_x    = W
scene.render.resolution_y    = H
scene.render.filepath        = os.path.abspath(out_img)

# 11) do it!
bpy.ops.render.render(write_still=True)
print("✅ Rendered →", out_img)
