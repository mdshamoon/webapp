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

import { Pollutant } from '@shootismoke/convert';
import React from 'react';

import skull from '../../../assets/images/icons/skull.svg';
import { Section } from '../Section';
import { Tip } from '../Tip';
import { HealthSection } from './HealthSection';

interface PollutantSectionProps {
	aqi: number;
	pollutant: Pollutant;
}

/**
 * Definitions and effects of various pollutants.
 *
 * @see https://www.sciencedirect.com/topics/chemistry/air-pollutant
 */
const pollutantData: Partial<Record<
	Pollutant,
	{ effects: string; name: string }
>> = {
	bc: {
		effects:
			'Black carbon is a potent climate-warming component of particulate matter formed by the incomplete combustion of fossil fuels, wood and other fuels.',
		name: 'Black Carbon',
	},
	c6h6: {
		effects:
			'Hydrocarbons are the primary pollutants that produce photochemical smog.',
		name: 'Hydrocarbons',
	},
	// FIXME Add ch4
	// ch4: {
	// 	effects: 'Partly responsible for the atmospheric greenhouse effect.',
	// 	name: 'Methane',
	// },
	co: {
		effects:
			'Carbon monoxide reduces the oxygen-carrying capacity of the blood by combining with haemoglobin, thus deprives tissues of O2.',
		name: 'Carbon monoxide',
	},
	// FIXME Add co2
	// co2: {
	// 	effects: 'Partly responsible for the atmospheric greenhouse effect',
	// },
	no: {
		effects:
			'Nitrogen oxides cause eye, throat, and lung irritation. Primary pollutants that produce photochemical smog and acid rain, destroy ozone at the stratosphere.',
		name: 'Nitrogen oxides',
	},
	no2: {
		effects:
			'Nitrogen oxides cause eye, throat, and lung irritation. Primary pollutants that produce photochemical smog and acid rain, destroy ozone at the stratosphere.',
		name: 'Nitrogen oxides',
	},
	o3: {
		effects:
			'Ozone causes eye, throat, and lung irritation, impairs lung function.',
		name: 'Ozone',
	},
	pm10: {
		effects:
			'Particulate matters under 10μm (PM10), may cause breathing difficulties.',
		name: 'Particulates',
	},
	pm25: {
		effects:
			'Particulate matters under 2.5μm (PM2.5), may cause breathing difficulties.',
		name: 'Particulates',
	},
	so2: {
		effects:
			'Sulfur dioxide causes eye, throat, and lung irritation. Primary pollutants that produce acid rain.',
		name: 'Sulfur dioxide',
	},
};

export function PollutantSection(
	props: PollutantSectionProps
): React.ReactElement {
	const { aqi, pollutant } = props;

	const polData = pollutantData[pollutant];

	if (!polData) {
		throw new Error('All pollutants are in pollutantData. qed.');
	}

	return (
		<Section title="Today's tips">
			<Tip imgAlt="skull" imgSrc={skull}>
				<p className="type-400 md:type-500">
					Your primary pollutant is{' '}
					<span className="text-orange">
						{polData.name} ({pollutant.toUpperCase()})*
					</span>
				</p>
			</Tip>

			<p className="mt-2 type-100 text-gray-600">*{polData.effects}</p>

			<HealthSection aqi={aqi} />
		</Section>
	);
}
