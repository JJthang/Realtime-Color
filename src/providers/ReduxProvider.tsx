'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from '@/stores'

type Props = {
    children: React.ReactNode
}

const ReduxProvider: React.FC<Props> = ({ children }) => {
    const storeRef = useRef<AppStore>(undefined);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default ReduxProvider