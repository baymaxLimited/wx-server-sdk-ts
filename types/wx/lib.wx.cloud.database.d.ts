declare namespace cloud {
    namespace collection {

    }
    interface CollectionAddOptions {

    }
    interface CollectionUpdateOptions {

    }
    interface CollectionRemoveOptions {

    }
    type CollectionWhereParam = { [key: string]: string }

    interface collection {
        doc(id: string | number): Document
        get(): Promise<any>
        add(options: CollectionAddOptions) : Promise<any>
        update(options: CollectionUpdateOptions ) : Promise<any>
        remove(options: CollectionRemoveOptions) : Promise<any>
        count() : Promise<any>
        where(rule: CollectionWhereParam) : collection
        orderBy(fieldName: string, order: string): collection
        limit(max: number): collection
        skip(offset: number): collection
        field(definition: object): collection | Document
    }

    namespace database {
    }

    interface database {
        collection(name: string): collection
    }

    namespace Document {

    }
    type DocumentWhereParam = { [key: string]: string }

    interface Document {
        get(): Promise<any>

        skip(count: number): Document

        limit(count: number): Document

        where(obj?: DocumentWhereParam): Document
    }

    interface DatabaseInitParam {
        env: string
    }

    function database(obj?: DatabaseInitParam): database
}