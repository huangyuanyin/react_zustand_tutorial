import shallow from 'zustand/shallow'
import { useCatStore } from '../stores/catStore'

export const CatController = () => {
  // 第一种写法：会导致组件重新渲染
  //   const { increaseBigCats, increaseSmallCats } = useCatStore();

  // 第二种写法： 利用 selector，不会导致组件重新渲染
  // const increaseBigCats = useCatStore.use.increaseBigCats()
  // const increaseSmallCats = useCatStore.use.increaseSmallCats()

  // 第三种写法：在 store 中一次选择多个状态【返回的是object】
  // const { increaseBigCats, increaseSmallCats } = useCatStore(
  //   (state) => ({
  //     increaseBigCats: state.increaseBigCats,
  //     increaseSmallCats: state.increaseSmallCats
  //   }),
  //   shallow // 判断第一层状态是否相等
  // )

  // 第四种写法：在 store 中一次选择多个状态【返回的是array】
  const [increaseBigCats, increaseSmallCats] = useCatStore((state) => [state.increaseBigCats, state.increaseSmallCats], shallow)

  return (
    <div className='box'>
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  )
}
