import { DataTable } from '@/components/DataTable/DataTable';

const ClientsList = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: '25px',
      }}
    >
      <div style={{ width: '90%' }}>
        <DataTable
          columns={[
            { accessor: 'name' },
            { accessor: 'streetAddress' },
            { accessor: 'city' },
            { accessor: 'state' },
          ]}
          data={[
            {
              id: '1323addd-a4ac-4dd2-8de2-6f934969a0f1',
              name: 'Feest, Bogan and Herzog',
              streetAddress: '21716 Ratke Drive',
              city: 'Stromanport',
              state: 'WY',
              missionStatement: 'Innovate bricks-and-clicks metrics.',
            },
            {
              id: '0cf96f1c-62c9-4e3f-97b0-4a2e8fa2bf6b',
              name: 'Cummerata - Kuhlman',
              streetAddress: '6389 Dicki Stream',
              city: 'South Gate',
              state: 'NH',
              missionStatement: 'Harness real-time channels.',
            },
            {
              id: 'bba53ee9-385f-4b3d-a9a4-613ced38ff2c',
              name: 'Goyette Inc',
              streetAddress: '8873 Mertz Rapid',
              city: 'Dorthyside',
              state: 'ID',
              missionStatement: 'Productize front-end web services.',
            },
            {
              id: '3d80d34a-4aff-468a-b4e5-e17658f7635e',
              name: 'Runte Inc',
              streetAddress: '2996 Ronny Mount',
              city: 'McAllen',
              state: 'MA',
              missionStatement: 'Engage synergistic infrastructures.',
            },
            {
              id: '3ae22e52-335e-4e49-9e26-f5e0089edb76',
              name: 'Goldner, Rohan and Lehner',
              streetAddress: '632 Broadway Avenue',
              city: 'North Louie',
              state: 'WY',
              missionStatement: 'Incubate cross-platform metrics.',
            },
            {
              id: '6e9372ad-6b30-40c1-bd05-30211cd00ed2',
              name: "Doyle, Hodkiewicz and O'Connell",
              streetAddress: '576 Joyce Ways',
              city: 'Tyraburgh',
              state: 'KS',
              missionStatement: 'Scale web-enabled e-business.',
            },
            {
              id: '2d0ddea1-ee92-477e-8d63-6d0508749ae6',
              name: "Rau - O'Hara",
              streetAddress: '7508 Lansdowne Road',
              city: 'Shieldsborough',
              state: 'MI',
              missionStatement: 'Innovate real-time applications.',
            },
            {
              id: '1c509c99-109e-4f2c-bc76-03c23b839222',
              name: 'Tillman - Jacobi',
              streetAddress: '57918 Gwendolyn Circles',
              city: 'Sheridanport',
              state: 'MI',
              missionStatement: 'Matrix viral synergies.',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ClientsList;
