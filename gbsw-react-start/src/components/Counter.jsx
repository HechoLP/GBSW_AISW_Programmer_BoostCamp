import { useEffect, useState } from "react";
import Even from "./Even";

function Counter({ name }) {
    // 상태 (state)
    // 리액트는 기본적으로 state가 변경되어야 재 렌더링을 요청한다.
    // 따라서 기존 변욱의 경우 값은 바뀌더라도 재렌더링이 되지 않는다.
    // useState 등 상태 값을 이용해 적잘한 방법으로 상태 변경이 일어나면 재렌더링이 발생한다

    // let currunt = 0; // 값은 바뀌어도 재렌더링 X
    let [current, setCurrent] = useState(0);    //  setCurrent로 상태 변경 시 재렌더링 호출

    // React Lifecycle
    // Mount
    // Update
    // Unmount


    // useEffect 기본 문법
    // useEffect(() => {실행할 코드}, [의존성]);

    // 의존성 : "이 값이 바뀌면 이 코드를 다시 실행해!"라고 알려주는 값
    // useEffect는 특정 시점에 JavaScript 작업을 실행하기 위해 사용한다.


    // Liftcycle 중 Mount 해당하는 과정
    // 의존성 배열을 비운경우, 해당 useEffect는 컴포넌트가 마운트 된 후 1회 실행된다
    useEffect(() => {
        // 카운트 초기값을 500으로 설정
        // setCurrent(500);


        // setInterval 기본 코드
        // setInterval(() => {반복해서 실행할 코드}, 시간);

        // setInterval은 일정한 시간 간격마다 지정한 코드를 반복해서 실행하는 함수이다. 
        // () => {}에는 반복할 코드를 작성하고, 마지막에는 실행 간격(밀리초)을 입력한다.

        const id = setInterval(() => {
            console.log("blink")
        }, 1000)
        console.log("생성, " + id)

        // Liftcycle 중 Unmount에 해당하는 과정
        return () => {
            console.log("CleanUP")

            // return () => { clearInterval(id); }는 컴포넌트가 언마운트될 때 실행되어, 실행 중인 타이머를 종료하는 정리 함수이다.
            clearInterval(id);
        };
    })

    // Liftcycle 중 Update에 해당하는 과정
    // 카운터의 current값이 100이 넘어가면 alert 출력, 그 외에는 로그 출력
    // 의존성 배열에는 1개 이상의 의존성을 설정가능
    useEffect(() => {
        if (current == 100)
            alert("100이 되었습니다.")
        else
            console.log(current)
    }, [current]);


    // Single Page Application
    // Multi Page Application
    return (
        <div>
            <h1>Counter App</h1>
            <p>제 이름은 {name}입니다.</p>
            <div>{current}</div>
            <div>
                <button onClick={() => {
                    setCurrent(current + 10)
                }}
                >+10</button>
                <button onClick={() => {
                    setCurrent(current + 1);
                }}
                >+1</button>
                <button onClick={() => {
                    setCurrent(current - 1);
                }}
                >-1</button>
                <button onClick={() => {
                    setCurrent(current - 10)
                }}
                >-10</button>
            </div>
            {current % 2 == 0 && <Even></Even>}
            {/* &&는 "앞의 조건이 참(true)일 때만 뒤의 코드를 실행(또는 보여준다)"는 뜻 */}
        </div>
    );
}

export default Counter;