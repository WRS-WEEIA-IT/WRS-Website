import { LucideIcon } from 'lucide-react';

interface SearchBarGroup {
    groupName: string;
    Icon: LucideIcon;
    items: {
        itemName: string;
        itemPath: string;
    }[];
}

export default SearchBarGroup;
