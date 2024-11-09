'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInput } from '@/components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

type Message = {
    id: number;
    content: string;
    sender: 'user' | 'bot';
};

export function AppSidebar() {
    const [messages, setMessages] = useState<Message[]>([{ id: 1, content: 'Hello! How can I help you today?', sender: 'bot' }]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            const newMessage: Message = {
                id: messages.length + 1,
                content: inputMessage,
                sender: 'user',
            };
            setMessages([...messages, newMessage]);
            setInputMessage('');

            // Simulate bot response
            setTimeout(() => {
                const botResponse: Message = {
                    id: messages.length + 2,
                    content: 'Thank you for your message. How else can I assist you?',
                    sender: 'bot',
                };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 1000);
        }
    };

    return (
        <Sidebar>
            <SidebarHeader className='border-b p-4'>
                <h2 className='text-lg font-semibold tracking-tight'>Chat</h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <ScrollArea className='h-[calc(100vh-8rem)] px-4'>
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex flex-col  mb-4 ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
                            >
                                <div className={`flex  gap-2 max-w-[80%]`}>
                                    {message.sender == 'bot' && (
                                        <Avatar>
                                            <AvatarImage src={'/bot-avatar.png'} alt={'Bot'} />
                                            <AvatarFallback>{'Bot'}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div
                                        className={`p-3 rounded-lg text-sm ${
                                            message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                        }`}
                                    >
                                        {message.content}
                                    </div>
                                </div>
                            </div>
                        ))}
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
                        placeholder='Type a message...'
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className='flex-grow'
                    />
                    <Button type='submit' size='icon' className='shrink-0'>
                        <Send className='h-4 w-4' />
                        <span className='sr-only'>Send message</span>
                    </Button>
                </form>
            </SidebarFooter>
        </Sidebar>
    );
}
