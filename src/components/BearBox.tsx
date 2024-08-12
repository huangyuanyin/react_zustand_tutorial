import { useBearStore } from '../stores/bearStore'

export const BearBox = () => {
  // 写法一：
  // const bears = useBearStore((state) => state.bears);
  // const increasePopulation = useBearStore((state) => state.increasePopulation);
  // const removeAllBears = useBearStore((state) => state.removeAllBears);
  // 写法二：如果你不是需要所有状态，而是为了偷懒而这样写的话，可能会引起不必要的重渲染。
  // 				在小的app里无关紧要，但在大而复杂的应用里会影响速度。
  const { bears, increasePopulation, removeAllBears } = useBearStore()
  return (
    <div className='box'>
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove all bears</button>
      </div>
    </div>
  )
}
