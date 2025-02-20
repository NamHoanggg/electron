import { SimpleGrid } from "@mantine/core";
import { navigationItems } from "./data";
import { NavigationItem } from "./NavigationItem";

export const Navigation: React.FC = () => {
	return (
		<SimpleGrid cols={3} spacing="md">
			{navigationItems.map((item) => (
				<NavigationItem key={item.router} {...item} />
			))}
		</SimpleGrid>
	);
};
