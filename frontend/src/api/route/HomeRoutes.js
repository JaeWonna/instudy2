import GroupMainView from "../../components/group/GroupMainView";

const HomeRoutes = [
    {
        path: '/group/:id',
        element: <GroupMainView />,
        name: '스터디그룹',
        description: '조회',
    },

];
export default HomeRoutes;