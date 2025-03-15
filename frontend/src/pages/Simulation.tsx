import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import { WIDTH } from "../game/Constants";
import { pad } from "../game/padding";

const Simulation = () => {
    const canvasRef = useRef<any>(null);
    const [outputs, setOutputs] = useState<{ [key: number]: number[] }>({
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [],
    });

    async function simulate(ballManager: BallManager) {
        while (1) {
            ballManager.addBall(pad(WIDTH / 2 + 70 * (Math.random() - 0.5)))
            await new Promise((resolve) => {
                setTimeout(resolve, 1000)
            })
        }
    }

    useEffect(() => {
        if (canvasRef.current) {
            const ballmanager = new BallManager(canvasRef.current as HTMLCanvasElement,
                (index: number, startX?: number) => {
                    setOutputs((outputs: any) => {
                        return {
                            ...outputs,
                            [index]: [...(outputs[index] as number[]), startX],
                        };
                    });
                }
            );
            simulate(ballmanager);
            return () => {
                ballmanager?.stop()
            };
        }

    }, [canvasRef])
    return (
        <div className='flex'>
            <div>
                {
                    JSON.stringify(outputs, null, 2)
                }
            </div>
            <div>
                <canvas ref={canvasRef} width="800" height="800"></canvas>
            </div>

        </div>)
}

export default Simulation