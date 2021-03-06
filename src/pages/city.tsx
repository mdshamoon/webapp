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

import { MatchRenderProps } from '@reach/router';
import React from 'react';

import CityTemplate from '../templates/city';

/**
 * Parse query string for lat and lng.
 *
 * @see https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
 * @param queryString - The query string to parse.
 */
function parseQuery(queryString: string): Record<string, string> {
	const query: Record<string, string> = {};
	queryString = queryString.split('#')[0];
	const pairs = (queryString.startsWith('?')
		? queryString.substr(1)
		: queryString
	).split('&');
	for (let i = 0; i < pairs.length; i++) {
		const pair = pairs[i].split('=');
		query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
	}
	return query;
}

export default function City(
	props: MatchRenderProps<void>
): React.ReactElement | null {
	const { location } = props;
	const parsed = parseQuery(location.search);

	if (
		typeof window !== 'undefined' &&
		(isNaN(+parsed.lat) || isNaN(+parsed.lng))
	) {
		window.location.pathname = '/404';

		return null;
	} else {
		return (
			<CityTemplate
				pageContext={{
					city: {
						gps: { latitude: +parsed.lat, longitude: +parsed.lng },
						name: (location?.state as Record<string, string>)?.name,
					},
				}}
			/>
		);
	}
}
