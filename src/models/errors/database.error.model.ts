class DatabaseError extends Error {
    constructor(
        public massage: string,
        public error?: any,

    ) {
        super(massage);
    }

}
export default DatabaseError;