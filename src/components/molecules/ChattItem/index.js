import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

// disini logika chat bila isMe(dari saya) dan other (oranglain/dokter)
//jika ada props di Chatting isme maka tampilan isme
//jika bukan other
//text dan date berasal dari isMe
const ChattItem = ({ isMe,text,date }) => {
    if (isMe) {
        return <IsMe text={text} date={date} />
    }
    return <Other />
}

export default ChattItem;

