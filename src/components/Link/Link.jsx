import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-7 hover:bg-red-500 pl-4" ><a href={route.path}>{route.name}</a></li>
    );
};

Link.protoTypes = {
    route: PropTypes.object
}

export default Link;