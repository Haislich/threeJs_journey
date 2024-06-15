import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
// this is equal to mesh.position.set(xPos,yPos,zPos)
mesh.position.x = -1
mesh.position.y = 0
// The z axis for the object gets closer
mesh.position.z = 1
// mesh.position.normalize()
// Now the length is 1
// console.log(mesh.position.length())

// NB oirder matters in rotation, try to rotate your head left and down and then in inverted order.
// Toi solve this use mesh.rotation.reoder('XYZ') and specify the order of roatation in a string
mesh.rotation.x = 1
mesh.rotation.y = 1
mesh.rotation.z = 1

scene.add(mesh)


const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// The z axis for the camera gets closer, the object stays in place and thus it seems that we have moved back from the object
camera.position.z = 3

// camera.position.x = 1
// camera.position.y = 1

scene.add(camera)

console.log(mesh.position.distanceTo(camera.position))
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)