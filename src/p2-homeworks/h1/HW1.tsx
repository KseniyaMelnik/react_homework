import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://icons.iconarchive.com/icons/iconka/meow/256/cat-grumpy-icon.png',
    name: 'Grumpy Cat',
    message: 'Revenge is a dish best served ... At every meal.',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
