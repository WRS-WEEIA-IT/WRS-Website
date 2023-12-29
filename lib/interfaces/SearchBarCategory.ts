import { LucideIcon } from 'lucide-react';

interface SearchBarCategory {
    categoryName: string;
    Icon: LucideIcon;
    categoryItems: {
        itemName: string;
        itemPath: string;
    }[];
}

export default SearchBarCategory;
