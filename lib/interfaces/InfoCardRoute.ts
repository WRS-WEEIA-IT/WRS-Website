import { LucideIcon } from 'lucide-react';
import Route from './Route';

export default interface InfoCardRoute extends Route {
    color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'orange' | 'magenta' | 'cyan' | 'teal';
    description: string;
    Icon: LucideIcon;
}