import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";

const Home = ({ id, fetchedUser, getClientVersion, message , setMessage}) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		<Group title="Navigation Example">
			<Div>
				Имя пользователя {fetchedUser && fetchedUser.first_name}

				<Textarea className='margin-bottom' value={message} onChange={(e) => {
					setMessage(e.currentTarget.value)
				}} placeholder='Введите текст новости' />

				<Button size="xl" level="2" onClick={getClientVersion} >
					Запросить версию приложения и посмотреть сообщение
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
