import GlobalStyles from '@mui/material/GlobalStyles';
import UsersHeader from './UsersHeader';


function Users() {
	return (
		<>
			<GlobalStyles
				styles={() => ({
					'#root': {
						maxHeight: '100vh'
					}
				})}
			/>
			<div className="w-full h-full flex flex-col px-16">
				<UsersHeader />
			</div>
		</>
	);
}

export default Users;
