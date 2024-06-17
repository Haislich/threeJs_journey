import * as THREE from 'three'
import gsap from 'gsap'
const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
// this is equal to mesh.position.set(xPos,yPos,zPos)

scene.add(mesh)



const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// The z axis for the camera gets closer, the object stays in place and thus it seems that we have moved back from the object
camera.position.z = 3

scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)


// const clock = new THREE.Clock()
gsap.to(mesh.position, { duration: 1, delay: 2, x: 2 })
const tick = () => {
    // const elapsedTime = clock.getElapsedTime()
    // mesh.rotation.y = Math.sin(elapsedTime)

    window.requestAnimationFrame(tick)
}

tick()

console.log("f")
console.log("f")

