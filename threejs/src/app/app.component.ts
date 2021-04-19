import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'threejs';
  public speed: number = 0;

  direction$ = new BehaviorSubject<number>(1);
  direction = this.direction$.asObservable();

  constructor() {}

  ngOnInit() {
    let speed = 0;
    this.direction$.subscribe((x) => {
      speed = x;
      this.speed = speed;
      console.log(
        '🚀 ~ file: app.component.ts ~ line 25 ~ AppComponent ~ this.direction$.subscribe ~ this.speed',
        this.speed
      );
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const geometry = new THREE.SphereGeometry(1, 9, 2, 4, 6, 3, 1);

    const material = new THREE.MeshStandardMaterial();
    const texture = new THREE.TextureLoader().load(
      '/assets/textures/13444-normal.jpeg'
    );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    material.normalMap = texture;
    material.metalness = 0.7;
    material.roughness = 0.9;

    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;
    camera.position.y = -0.51;

    const light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(-50, 20, 5);
    light.intensity = 7;
    scene.add(light);

    const light2 = new THREE.PointLight(0x0013FF, 1, 100);
    light2.position.set(50, -50, 50);
    light2.intensity = 7;
    scene.add(light2);

    const light3 = new THREE.PointLight(0xA9009C, 1, 100);
    light3.position.set(50, -50, 50);
    light3.intensity = 7;
    scene.add(light3);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 1.1, window.innerHeight / 1.1, false);
    document.body.appendChild(renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.001;
      cube.rotation.y += speed * 0.01;
      cube.position.x += speed * 0.0001;
      renderer.render(scene, camera);
    }
    animate();
  }

  directionToogle(i: number) {
    this.direction$.next(i * -1);
  }
}
