export const permissions: any = {
    getUsers: {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: ['trainer'],
    },
    postUsers: {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    deleteUsers: {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: ['head-trainer'],
    },
    updateUsers: {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: ['trainer'],
        update: ['head-trainer', 'trainer']
    }
}