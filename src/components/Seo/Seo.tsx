// Sh**t! I Smoke
// Copyright (C) 2018-2020  Marcelo S. Coelho, Amaury Martiny

// Sh**t! I Smoke is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Sh**t! I Smoke is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Sh**t! I Smoke.  If not, see <http://www.gnu.org/licenses/>.

import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
	title: string;
}

export function Seo(props: SeoProps): React.ReactElement {
	const { title } = props;

	return (
		<Helmet>
			<meta charSet="utf-8" />
			<meta
				name="description"
				content="FIXME Some description about the app"
			/>

			<link rel="preconnect" href="https://api.bigdatacloud.net" />
			<link rel="preconnect" href="http://api.waqi.info" />
			<link rel="preconnect" href="https://api.openaq.org" />
			<title>{title} - Sh**! I Smoke</title>
		</Helmet>
	);
}