"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions } from "@tsparticles/engine";

export function AnimatedBackground() {
    const [init, setInit] = useState(false);

    // Inicializa o engine do tsParticles
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log("Particles Background Loaded:", container);
    };

    // Configuração "Cyberpunk Network"
    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#09090b", // Fundo Base (Zinc 950)
                },
            },
            fpsLimit: 60, // Limita FPS para performance/bateria
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab", // Efeito de conectar linhas ao mouse
                    },
                    onClick: {
                        enable: true,
                        mode: "push", // Adiciona partículas ao clicar
                    },
                },
                modes: {
                    grab: {
                        distance: 200,
                        links: {
                            opacity: 0.8,
                            color: "#00f3ff", // Linhas Neon Cyan ao passar o mouse
                        },
                    },
                    push: {
                        quantity: 4,
                    },
                },
            },
            particles: {
                color: {
                    value: ["#00f3ff", "#b000ff"], // Cyan e Roxo
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1, // Linhas de conexão sutis
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 1, // Movimento lento e fluido
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80, // Quantidade de partículas
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (!init) {
        // Placeholder enquanto carrega (evita flash branco)
        return <div className="fixed inset-0 -z-50 bg-[#09090b]" />;
    }

    return (
        <div className="fixed inset-0 -z-50">
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="absolute inset-0"
            />
        </div>
    );
}
