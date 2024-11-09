'use client';

import { useState } from 'react';
import { Loader2, Send, MessageSquare } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInput } from '@/components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';

type Message = {
    id: number;
    content: string;
    sender: 'user' | 'bot';
};

export function AssistantSidebar() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async () => {
        if (inputMessage.trim() !== '') {
            const userMessage: Message = {
                id: messages.length + 1,
                content: inputMessage,
                sender: 'user',
            };
            setMessages((prev) => [...prev, userMessage]);
            setInputMessage('');
            setIsLoading(true);

            try {
                const response = await axios.post('https://olekgolus-wrs-assistant.deno.dev/v1/assistant', {
                    prompt: inputMessage,
                });

                const botMessage: Message = {
                    id: messages.length + 2,
                    content: response.data.answer,
                    sender: 'bot',
                };
                setMessages((prev) => [...prev, botMessage]);
            } catch (error) {
                const errorMessage: Message = {
                    id: messages.length + 2,
                    content: 'Sorry, I encountered an error. Please try again.',
                    sender: 'bot',
                };
                setMessages((prev) => [...prev, errorMessage]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <Sidebar className='bg-sidebar-primary border-l'>
            <SidebarHeader className='flex flex-row items-center justify-center border-b p-4'>
                <div className='flex items-center gap-2'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src='/wrs-assistant.jpg' alt='Weejkuś' />
                        <AvatarFallback>W</AvatarFallback>
                    </Avatar>
                    <h2 className='text-lg font-semibold tracking-tight'>Weejkuś</h2>
                </div>
                <Badge variant='outline' className='bg-primary/10'>
                    Beta
                </Badge>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <ScrollArea className='h-[calc(100vh-8rem)] px-4 pt-4'>
                        {messages.length === 0 ? (
                            <div className='flex flex-col items-center justify-center h-full text-center px-6 text-muted-foreground'>
                                <MessageSquare className='h-12 w-12 mb-4 opacity-50' />
                                <h3 className='text-lg font-semibold mb-2'>Witaj w Weejkuś!</h3>
                                <p className='text-sm'>
                                    Jestem twoim asystentem WRS WEEIA. Możesz zadać mi pytanie o życie studenckie, wydarzenia na wydziale,
                                    lub poprosić o pomoc w sprawach związanych ze studiami.
                                </p>
                            </div>
                        ) : (
                            messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex flex-col mb-4 ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div
                                        className={`flex gap-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                    >
                                        {message.sender === 'bot' && (
                                            <Avatar className='h-8 w-8'>
                                                <AvatarImage src='/wrs-assistant.jpg' alt='Bot' />
                                                <AvatarFallback>W</AvatarFallback>
                                            </Avatar>
                                        )}
                                        <div
                                            className={`p-3 rounded-2xl text-sm ${
                                                message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted/50 shadow-sm'
                                            }`}
                                        >
                                            {message.content}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        {isLoading && (
                            <div className='flex gap-3 max-w-[85%]'>
                                <Avatar className='h-8 w-8'>
                                    <AvatarImage src='/wrs-assistant.jpg' alt='Bot' />
                                    <AvatarFallback>W</AvatarFallback>
                                </Avatar>
                                <div className='flex justify-start'>
                                    <div className='flex items-center gap-2 p-3 rounded-2xl text-sm bg-muted/50 shadow-sm'>
                                        <Loader2 className='w-4 h-4 animate-spin' />
                                        <span>Myślę...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ScrollArea>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className='border-t p-4'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSendMessage();
                    }}
                    className='flex items-center gap-2'
                >
                    <SidebarInput
                        placeholder='Zadaj mi pytanie...'
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className='flex-grow'
                    />
                    <Button type='submit' size='icon' className='shrink-0 rounded-full' disabled={isLoading}>
                        <Send className='h-4 w-4' />
                        <span className='sr-only'>Send message</span>
                    </Button>
                </form>
            </SidebarFooter>
        </Sidebar>
    );
}
