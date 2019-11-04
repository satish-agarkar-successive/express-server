export const permissions: any = {
    deleteUsers: {
        all: ['head-trainer'],
        delete: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
    },
    getUsers: {
        all: ['head-trainer'],
        delete: ['trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
    },
    postUsers: {
        all: ['head-trainer'],
        delete: [],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
    },
    updateUsers: {
        all: ['head-trainer'],
        delete: ['trainer'],
        read: ['trainee', 'trainer'],
        update: ['head-trainer', 'trainer'],
        write: ['trainer'],
    },
};
