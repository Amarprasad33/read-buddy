"use client"

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { FC } from 'react';

interface ProviderProps {}

const Provider: FC<ProviderProps> = ({}) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            
        </QueryClientProvider>
    );
}


