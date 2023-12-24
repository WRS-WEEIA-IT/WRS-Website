import { LucideIcon } from 'lucide-react';

export default interface InfoCardConfig {
    title: string;
    color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'orange' | 'magenta' | 'cyan' | 'teal';
    description: string;
    Icon: LucideIcon;
}
