import * as THREE from 'three'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const sizes = {
    width: 800,
    height: 600
}
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - .5
    cursor.y = event.clientY / sizes.height - .5
    console.log(cursor)
})
const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
// this is equal to mesh.position.set(xPos,yPos,zPos)

scene.add(mesh)



const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 999999)
// The z axis for the camera gets closer, the object stays in place and thus it seems that we have moved back from the object
camera.position.z = 3

scene.add(camera)
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)


const clock = new THREE.Clock()
const tick = () => {
    // const elapsedTime = clock.getElapsedTime()
    // mesh.rotation.y = elapsedTime
    // mesh.position.x = cursor.x
    // mesh.position.y = - cursor.y
    // camera.lookAt(mesh.position)
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

