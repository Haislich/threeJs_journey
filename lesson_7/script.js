import * as THREE from 'three'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth,
        sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
let cnt = 0
window.addEventListener("dblclick", () => {
    if (cnt % 2 == 0) {
        sizes.width = 500,
            sizes.height = 800
    }
    else {
        sizes.width = window.innerWidth,
            sizes.height = window.innerHeight
    }

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    cnt += 1
})
const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)

const material = new THREE.MeshBasicMaterial({ color: 'red', })
const mesh = new THREE.Mesh(geometry, material)
// this is equal to mesh.position.set(xPos,yPos,zPos)

scene.add(mesh)



const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 999999)
// The z axis for the camera gets closer, the object stays in place and thus it seems that we have moved back from the object
camera.position.z = 3

scene.add(camera)
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.enabled = false
const renderer = new THREE.WebGLRenderer({ canvas: canvas, })
renderer.setSize(sizes.width, sizes.height)

// Problem performances on devices with pixel ration > 2
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


const clock = new THREE.Clock()
const tick = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

