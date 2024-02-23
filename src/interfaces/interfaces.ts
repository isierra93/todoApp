export interface TodoFormProps {
    addTodo: (todo: string) => void;
}

export interface TodoProps {
    task: {
        task: string;
        id: string;
        time: Date;
        completed: boolean;
        isEdiging: boolean;
    }
    toggleComplete: (id: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string) => void;
}

export interface EditTodoFormProps {
    task: {
            task: string;
            id: string;
            time: Date;
            completed: boolean;
            isEdiging: boolean;
    }
    updateTodo: (todo: string, id: string) => void;
}