export default function* saga(){
  yield* takeEvery('app/GET_COOL_MESSAGE', ()* => {
    yield put({type: 'app/RECEIVE_COOL_MESSAGE', message: 'JS is awesomwe'})
  })
}
