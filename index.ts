import 'three-examples/controls/OrbitControls'
import * as THREE from 'three'

const el = document.querySelector('#app')

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, el.clientWidth / el.clientHeight, 0.1, 1000)

const controls = new THREE.OrbitControls(camera)

const renderer = new THREE.WebGLRenderer({
  alpha: true
})
renderer.setSize(el.clientWidth, el.clientHeight)
el.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
scene.add(new THREE.GridHelper(100, 50))

camera.position.z = 5

const animate = () => {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.1
  cube.rotation.y += 0.1

  renderer.render(scene, camera)
}

animate()
