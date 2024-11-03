import { RepositoriesList, SearchField } from "../components"

export const SearchPage = () => {

    return (
        <div className='w-full flex flex-col gap-5 p-2 bg-gray-100 rounded-xl shadow-lg overflow-hidden box-border'>
            <div className='flex sm:flex-col md:flex-row gap-4'>
                <SearchField
                    type="reponame"
                    placeholder="Enter a repo name"
                />
                <SearchField
                    type="login"
                    placeholder="Enter user name"
                />
            </div>
            <RepositoriesList />
        </div>
    )
}
