declare module 'index' {
    global {
        class RuleMap {
            keys: string[]
            values: string[]

            insert(key: string, value: string): void
            get(key: string): string
            getKeys(): string[]
            contains(key: string): boolean
            clear(): void
        }
    }
}