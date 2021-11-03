import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'data:image/jpeg;base64,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',
    name: 'Альберт Эйнштейн',
    message: 'Стремитесь не к успеху, а к ценностям, которые он дает.',
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