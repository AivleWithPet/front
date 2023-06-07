import { Rate } from 'antd';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const MyRate = styled(Rate)`
    color: red;
    font-size: 100px;
`

export default function TETE() {

    return (
        <div>
            <MyRate />
               <Button type="primary" onClick={showModal}>
                 Open Modal
                </Button>
        </div>
    )
}