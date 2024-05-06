import MemoBlock from '../MemoBlock/MemoBlock';
import './Board.css';


const Board = ({animating, handleMemoClick, memoBlocks}) => {
    return (
        <div className="mainScreen">
            <div className="header">Memorama
            <button onClick={() => window.location.reload()}>
                <span class="box">
                    Reiniciar
                </span>
            </button>
            <a target="_blank" href="https://elbuenparker.github.io/parkerweb" class="box2">
                <span>&lt;</span>
                    <span>ElBuenParker</span>
                <span>/&gt;</span>
            </a>
</div>
            <div className="board">
                {memoBlocks.map( (memoBlock, i) => {
                    return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
                })}
            </div>

        </div>
        
    );
}

export default Board;