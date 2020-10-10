// Shoot! I Smoke
// Copyright (C) 2018-2020  Marcelo S. Coelho, Amaury Martiny

// Shoot! I Smoke is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Shoot! I Smoke is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Shoot! I Smoke.  If not, see <http://www.gnu.org/licenses/>.

import c from 'classnames';
import React from 'react';

interface SectionProps {
	children:
		| React.ReactElement
		| undefined
		| (React.ReactElement | undefined)[];
	className?: string;
	noPadding?: boolean;
}

export const sectionHorizontalPadding = 'px-6 sm:px-12 md:px-24';

export function Section({
	children,
	className,
	noPadding,
}: SectionProps): React.ReactElement {
	return (
		<section
			className={c(
				'container mx-auto my-6 max-w-5xl',
				!noPadding && sectionHorizontalPadding,
				className
			)}
		>
			{children}
		</section>
	);
}
