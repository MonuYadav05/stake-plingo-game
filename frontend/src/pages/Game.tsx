import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
// import { WIDTH } from "../game/Constants";
// import { pad } from "../game/padding";
import axios from "axios";

const Game = () => {
    const canvasRef = useRef<any>(null);
    const [ballManager, setBallManager] = useState<BallManager>();

    useEffect(() => {
        if (canvasRef.current) {
            const ballmanager = new BallManager(canvasRef.current);
            setBallManager(ballmanager);
        }
    }, [canvasRef])
    return (
        <div className='flex'>
            <div>
                <canvas ref={canvasRef} width="800" height="800"></canvas>
            </div>
            <div>
                <button className='' onClick={async () => {
                    const response = await axios.post(`http://localhost:3000/game`, {
                        data: 1,
                    });
                    if (ballManager) {
                        ballManager.addBall(response.data.point);
                    }

                }}>Add ball</button>
            </div>
        </div>)
}

export default Game