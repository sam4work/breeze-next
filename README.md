
# Project Title

This simple client project that communicates with a laravel api with built-in suport for Laravel Sanctum.

The 

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
 - [@taylorotwel](https://github.com/taylorotwell)
 - This project was cloned from [breeze-next](https://github.com/laravel/breeze-next) by [@taylorotwel](https://github.com/taylorotwell)
## Authors
- Creator of this respository [@taylorotwel](https://github.com/taylorotwell)
- [@sam4work](https://github.com/sam4work)


## Tech Stack

**Client:** Next JS, Axios, TailwindCSS and more [packages](https://github.com/sam4work/pms-client/blob/update_for_v1/package.json)

**Server:** Laravel, MySQL [Server Setup](https://github.com/sam4work/pms-api)


## Documentation

Laravel [Documentation](https://laravel.com/docs/9.x)   
Nextjs [Documentation](https://nextjs.org/docs/getting-started)


## Deployment

To deploy this project run


```bash
  git clone https://github.com/sam4work/pms-client.git
```

```bash
  cd pms-client
```


Rename .env.example to .env.local. Add the line if missing
```
  NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```


```bash
  npm install
```



You can pass the ```-- -p 5555``` to switch port
```bash
  npm run dev 
```

Start Server before attemping to login

Email			 :```super@super.com ```
Password : ```super@super.com ```

## API Reference

#### Create customer

```http
  POST /api/customers/store
```

| Request | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `first_name`| `string` | **Required**. Customer First name|
| `last_name`| `string` | **Required**. Customer Second Name|
| `isp_code`| `digits` | **Required**. Service Provider Code|
| `phone_number`| `digits` | **Required**. Seven Digit phone number|
| `ghana_card_no`| `digits` | **Required**. 6 digit unique number|
| `owner`| `string` | **Required**. If Customer Owners the Phone Number|
| `service_type`| `string` | **Required**. ENUM POSTPAID or PREPAID|



#### Get all customers

```http
  GET /api/customers
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search(optional)` |  `string`| Search For customers |

#### Get customer

```http
  GET /api/customers/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of customer to fetch |




#### Delete customer

```http
  Delete /api/customers/${id}/destroy
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`| `int` | **Required**. Customer Unique ID |



#### Update customer (?)

```http
  PATCH /api/customers/${id}/update
```

| Request | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `first_name`| `string` | **Required**. Customer First name|
| `last_name`| `string` | **Required**. Customer Second Name|
| `isp_code`| `digits` | **Required**. Service Provider Code|
| `phone_number`| `digits` | **Required**. Seven Digit phone number|
| `ghana_card_no`| `digits` | **Required**. 6 digit unique number|
| `owner`| `string` | **Required**. If Customer Owners the Phone Number|


## Know Issues
Update Customer Records
## License

[MIT](https://choosealicense.com/licenses/mit/)

