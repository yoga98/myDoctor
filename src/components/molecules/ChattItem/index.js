import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

// disini logika chat bila isMe(dari saya) dan other (oranglain/dokter)
//jika ada props di Chatting isme maka tampilan isme
//jika bukan other
const ChattItem = ({ isMe }) => {
    if (isMe) {
        return <IsMe />
    }
    return <Other />
}

export default ChattItem;

