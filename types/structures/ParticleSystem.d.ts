import HEX from "./Colors/HEX";
import RGBA from "./Colors/RGBA";
import Particle from "./Particle";
import FadeOptions from "./Options/FadeOptions";
import ParticleSystemOptions from "./Options/ParticleSystemOptions";
import { vectorInterval, shapes, interval } from "..";
export default class ParticleSystem {
    private readonly canvas;
    private canvasSize;
    private lastId;
    particles: Map<string, Particle>;
    private _ctx;
    private animationFramId;
    amount: number;
    life: interval;
    size: interval;
    speed: vectorInterval;
    colors: (RGBA | HEX)[];
    opacity: interval;
    fadeOut?: FadeOptions;
    fadeIn?: FadeOptions;
    shapes: shapes[];
    static numberInRange(invterval: interval): number;
    static elementFromArray<T>(arr: T[]): T;
    private createParticle;
    init(): void;
    private update;
    stop(): void;
    clear(): void;
    constructor(canvas: HTMLCanvasElement, options: ParticleSystemOptions);
}
