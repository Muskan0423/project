import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css'; // Ensure this file exists with the styles below
import NavigationBar from '../src/Navigation/Navigation'; // Adjust the import path as necessary
import logo from '../src/Images/image 30.png'; // Replace with the actual path to the image

const data = [
  {
    year: 2013,
    title: 'Formation of National',
    description: 'On 21 October 1951, National was formed at Raghomal Girls High School, Delhi, with Dr. Syama Prasad Mookerjee as its first President.',
    image: 'data:image/jpeg;base64,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',
    name: 'Dr. Syama Prasad Mookerjee',
    info: 'Founder of National',
  },
  {
    year: 2014,
    title: 'National Formation',
    description: 'In 1977, the Jana Sangh merged with several other parties to form the Janata Party, which later evolved into the National in 1980.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4ItnHpJivB6Xyu0_DQnY43uFV1cNKc7TaA&s',
    name: 'Atal Bihari Vajpayee',
    info: 'First President of National',
  },
  {
    year: 2016,
    title: 'Rise of National',
    description: 'The National faced a major electoral defeat in 1984, winning only 2 seats in the Lok Sabha.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4ItnHpJivB6Xyu0_DQnY43uFV1cNKc7TaA&s',
    name: 'Lal Krishna Advani',
    info: 'Prominent Leader of National',
  },
  {
    year: 2018,
    title: 'First National Government',
    description: 'In 1996, the National became the single largest party in the Lok Sabha, leading to its first brief tenure in the government.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4ItnHpJivB6Xyu0_DQnY43uFV1cNKc7TaA&s',
    name: 'Atal Bihari Vajpayee',
    info: 'Prime Minister of India',
  },
  {
    year: 2020,
    title: 'Second National Government',
    description: 'The National formed the government again in 1998, with Atal Bihari Vajpayee as the Prime Minister, marking a significant period in Indian politics.',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMVFRUVFRUVFxcVFRcXGBUXFRUXFhUVFxcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0rLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAEUQAAEDAgMEBQgHBwIHAQAAAAEAAhEDBCExQQUSUWETcYGRoQYUIjKxwdHwFUJSU3KS4SNDYoKTovFUsjRjdIOU0tMH/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDBAAFBv/EAC0RAAICAQMDAgYBBQEAAAAAAAABAhEDEiExBBNBFFEiUmGhsdEFFTJCgfBx/9oADAMBAAIRAxEAPwBtS0G8ARhIy9qlVNlAN3gMzhqq91850ScskZm03gbs4Le9XgwrT5AVKUJqKasoVQo6jtJxhRw9R5XQ5MmLRMa5OhCpFFlGw0SKNWNJU+3uWnDIqoLuC7TqzMo6gUW93U3YwwUVtZ3Yck+2qtcN15yGE+xSfo0GDjHPVHUdpOWsccU+o8QolZm47qOftTgQQSDEeErrBQK9qb+GQ+cVBr0zpki1TjMrm+ptjpA7arGCT6oK44BN3ghYaIlamZyQwxT80wtAXagaRtNkDFIlOlcgLrOoG/FDhEc9dpuxTIUJQqYQg3FOVOYxuZmUd1uCPnBMdRSCgpFvSxyU8U+QKG6nCNi0R6luE1tHd1SqPhDNZMgMe9yA9y4+ogPcUyEZys9V9dykVGlBNEnIJlJCtEBzcV1WI2a75C4u7iO0MtzbwkaZV5XpCWkQ5pHyJXLiwlvoBeWuoXk9L078FOxhRqbeSkXNlG40TJGMxnwzTfNajcCJXd2L3sPalF1QBzQUIthTH2xzOCG6kmU0K8bBNeiByTKKN5mYVNYmgGHJwXRaOzjBPZRGpKOoGlgw5X1pcHdG67mWkYYKrZSaMc+tSGPjJLJ2NFUD2kwzO/vbwnKI5digh54qbXdIJOPBQHJlIVxHbyTUzdSYwrmzqCgJGmE04LockbGSO0wMl2pQmY701Nc88Urb8DJKtwDhCYXJzgVIoWbjoqJ+5Nr2I7aUqdbWUQcE6gIwITnVQm1ewun3JHSDAECE2rWw3RkopqxqhVbkIpHNnWv3ZUjoy4SCMlXA7zs4Ct9nWoOZIGsYSjOWlWLCOp0QKloSgPsStc2yaGyDIPHE+CrqlOTyUY9RqdIvLp1FWyhbYOOQlFo7LnNXwqgCA0IDqhKpFzlzwRksceN2Q27NYF1tvTafVlSEOoE6xryI8vsgpuRpEdS6oRCS7sQ9jvUTIlvdboIgY8fb1q72ZtYYN3ZMfOCpHW/BOt7Z04LDlhjmtzfinkg9jXDo3xvMHZmrFtFm4d2N6MiNDkVlbWtun0nDDjPuC0LNqUnBsOEkNECdJw54k96894qdeDc8rasrL2g+HDAjQ5QeCz9SZ1ELe12N3JJMHgM1VVWUiI4/WIOB5wqYcmnwJljqM0W4SUumV3W2MS0ubj24RxCz9WgQYWzHkTMuTG0FNwSl0qVtYvc0uGicGlphwxGEHMKmtCKDGiqUukKeacppYhrD2zoemOaE5rU/o12o7QBpiEQOKcaYCY5yGoGg48JoYiApwS6htIMsQ3MR3uUStWTREkqCsMIovCMiqp1wUe2pPfkMs1alW5K3exPuHF3pNxmMeEDKFHglGa12TR4KZQ2RWcY3TOaTuRjyxtEpcIrPNnEo1DZmPpFXFOw3MXzGu6PeptrbsOQExPpZ8sEvqLWzD2K5RW21owZBSxRnIH2qbVfUacRH8o9sYoFW+efrEdWHsRipy3QJOC5EbR4zEDmQPaUnW9OMXY8iCob6nagueqLDJ+SbzRXgNUazSe/4IDk0uTCtMYUZpTs6SgvKeR8O3ghuVFRN2CK4mOrtn1gkmFBU3SVa7Prbp07RPeibT2ZuAFgJkxEfOCraTzovElWSJ7cG4M0llbB8mod8/VG8TEmYA06lc0g2mOk6NpBiPRxGmiylk94MjMYweSvKl8SWlztwOEndywy3efWsM4S1bM2KSovbOp00ipTIGibX2JQAh0gnLH3Iez6p6MFkmeJxwOPf71Nt7xtQbrhBmCCcez/C5ISTItHZ5piGHebHcZz6slX3Gzt4uNWmXcDMED4K7Zs1uj3idFKfbtLd0knrQ0u7CppGGungNdTDYYdBB4GZzzCqKzcZOJ5re3uzqbRIdTy+sePAYrIXjWzAx5+5Ux5NOw+hT3RWgpFG6HgntoFUeVHdlkXdTS08VPfbkJrLIkru8hXhZXuaUShbOcYaCTwAWhtNh5SJ7c1ZveaY3WtDeQACR9R7A7S8mZbsWp9aByLghV7TczMq9qBxM+5Rq4aTulmJwGaEckm92FwXhGdqMnAJWux6tV+61pymYw71fP8AJh+Yc3PjktDa0BTYGNmBzWpZdvhMsob/ABGb2X5JOaZqbvbB8Fq7WhRp5NBPGB4YID3KKa7TIDmkiZG8JECTPCEJR1/3MClp2iiY5tEO3msk88Y6gnu2kJBLcslUVriCQTiGlxGJhoE7xjIRCo7nb7QREkamNOSpDpoyJz6iS5NPebUpQd8COEx2iFUfSzGmGU8NSNAeJJE9qrqV9SqEzA4F0CeqdVLFthBx6wqLpoR5E9TN8DmXBqgbpJExuxAHPNDfTcC7eLRu6GSe4exFFOIMx1GE+rtBu7+zBJAOJEg4QSF0nOG0OAx0Tdz5Kfpi87gBOkgBsfPFNfQeMA4R1kz2olvWkYgxMSI9ilmmAtEW15ISp+CJc2lcBpnqa1s4Rrx7VFqms3AtI5wrSnXDXAkkxplPao20r4F0iQ3QESApqeROq2KuGJq+GVVSjVe70ies49iOzZzy0kGQM/0Cltc2N6d4HKNOvJHbUDfVJHHJNLLOvhEjihfxFIbY8P7V1XdTa7pwiMu7CclxJ38/y/cr6fD8xp2tlBubRhaZb2tAlcp3QUhtUHVeKptHo6Eyi2e8t3mPawzIG+QHCOvLOUG9pMDAW1JOYby+OCtLzZTXAmmAXTqcD3qvfsu4w3WNEYgtLQfarwnG7uhZKVUR6O2Hh29MZYDAGOSI29Ln73EzmlS8mq5zAHW4e5H+ga9PEAO/Dj4EIzljfDDBSXJrvJy7c9rg7GIxVm+gDAOk4DCfmVnfJ65qslr2Pg8su/RaVj5UFJcM7JFqVopneTjSSZgaYkxwzQavky0CZk8hmru5oEj0MCdd4jtwzSo0KkQ98/PFTl9EFZZc2ZxmygNPBFGy+S0YogaJ4aOCh8V8jPOZinsIvMnBqt7HYlOnmN48/grQJr3LXCEUrZKWaUtjhiIjlhp1KvrWrJk73gg3+2WMwJx4EFZ658qDjAb4qla+EBJx34L14Y0yG95JQKlUYZYZe+Fnx5S8WEnkYHcZT7raZc2WB09QMJljcXug3q4Za1rtrcXEDrUb6VZEyI09ICe9ZG9383TJ4qDunit2PCmuTFPI06otdobbqkmHRm0RwOcczlKp3uPGdcEnNK5C248cY8GWc5S5J1uSKZcC0kyCDiY1OKbZbPY/eLnRGQ4c8VFErrQ5Pp9mTv6F7b2lJo9WThiRnzUg1lVUbgjLsHDqTal2+BiZBnl1clnak2X+FItXunSU0coAVHXrVnZOdHCT7Aop6X+LxVI42/KJyml4ZfPuGMET2ALgvmlskxIPCZ7MR1rPPY/MgprMOKfs2uRVmp8F3RqB0HePUXAor6O9gTPzyWeJRGXDxlPiulhfhnRzLyi43AwgQDxGnUu3Bbo4DjrHViqU1XHQrh6knZfllO9FcRJbrvmPBJVxHUuq2hEdbNq2OKK1/NeP2/l9eNje6N/4mQT2tIVta/8A6T95Q7WOB8HAe1fPvp5n0Mc+M9RZXA+sjNvR9rxCwFv5eWrs3lp/jYR4gEeKn0fKSg+N2rTJPBzZ7pSelmx+9i9zYnakfWHz1IlLbIPPqBWTO0uCZ9JlH0cmuBfUYb3ZvaW0hzUtm0W8V5o7bDk07bcBhHeT70voc3gD6npvc9Xp7QZ9oYKTSvGGIcMcscD2rxV22Hfbce0qZs7bjiRJdhzVH0OVK7Mrz4ZcWeyJZLz6n5XluAccE6p5eNA9WSNd48/goPpsnyh1Q+Y3VWuRk2e0Kjvask9IC1vEv+AWJvfLqofUDWk9p8VCr+WlUj0m03CCfSZ8HCP1TrouokuPuGHU4YPdmlvDb4+nPCASR2zCra1aiPVaXc3ACe4qhf5VOLY6KiCdQzHqguifiq2rtOo8kl0fh9EYicAMsFtw9FkX935/QmXrsf8Aj+DUO2tumWimw5YAe+Uw+URH1h+Ue4LJ73P2cJ7cwmNeSY+c4W1dHj8oxPrcnhmmq7X3/WIPW0fBdY5kSY/xHf6wWbbUzx/RdZXxgGRniJ1hWWCKWxF9RJ8l/VaNEIkKg6QnEnE/Ex78E9ty4DBx7Y6+zDFVUKJPI2Xe8udIqoXzoxjTTj24oFTaztA3xKZREc2XrbgjVFN6dQO5ZSttF7tY/DggC4dxPeVzxRfJyyyXDNkNoEaBc+kOQ8fisabhxzJ709u0njAO78fau7EPYbvz9zVuu50UatcsGDiB1uAWWqXTyZLnd8eAQC9MsaXAjnJ8mpffURm5vZ6XgExvlBRGADusAY+Ky5KaSueNPkaM2uDT1PKWnox564HvKhVfKCcqYHW4n3BURcmly5Y4rgZzk+SydtmpP1e5JVcpJthaKdtBxyBPYU8WdQ/Uf+R3wW/t9ku+w0dgHuU6n5Pg+swH+aPYvDeRI9mMGzzMWNX7qp/Tf8E76Prfc1f6b/gvUmeTdLWkztc8+9SGbAoD9zT7ifaUjzoqunkzy61trph/ZsuG/hbUHfAV/a7OvXiXPqM5O6Wf7WkLdU9kUB+5o/kCkeZ0/uqf5AuXU0B9JqZgX7GrDF901v4unHj0abT2e7S/ofmqH2016XbWVP7mj/SaVNp2TdKdIf8AaYPcpy6+vf7fodfx/wD59zy+na1P9Vbu7KnuYFNoWdbR7D+Fld3spr0noDpujqa0e5SaVJ2Hp/2hSl/JtLb/AL7DL+Nj5a+/7PPbbycunnAkD/p7v/5JtXyaugCA13/j3IHiz5ley7JmcTPYhXhMOh5GP2R70n9SyadX6/RL0cNWn9nitxsG79YU3YcaNYak/YPFRqmyLmMaZ/pXE/7IXqtxRqmYrkfyNVdVtqx/fn8jU8P5Kb9v+/0V/p2M8yGzbqAXNAj+Cr2Zt5DuTHWVxLpeBgI9CoPqkY/s8M16JWsq8f8AEeCq6+zbj/UnuWzH1WrmX5/Rly9IocR/H7MZ5nWw/atGBnCpqwN+7xyTugqiSKrJM/VqcSR+76u5aj6JuNbk9xTX7Gq63Lvy/qtKyx+b8/oyvFL5fx+zJ0qdYSC+mR+F/wD6D5CIDVkS6nAHB/Gct3szV9V2M7WuT/L+qZ9Cn74936rQpR+YhKMl/iUbW1Yb6VPAgn1tCTw5pwZUxxZkAPW0aW8Fau2UfvSm/R3/ADD3qia9yTT9iuax8Q4s7N7wMdfehGgYzbP83wVx5iI9d3eh+Zj7b+9MmvcR37FQ63dxH5XqLdUKgLS2TjiA1wHatH9HNP139647ZbPtO710mntYYpp3RlKtGtvO9F2WgdGmWCF0Ff7L+53wWuds6nx9vxTDZUuA8fip6L8sqsleEZE0K3B/c74JhpVf4u53wWpqWtP7LfFR6lGn923vcu7P1O7/ANDO7lTif7vgudE/j/u+CvSxn3Te8oZYz7lveg8H1GWdexSebO4j+74JebO+0O8/BWr6TPum/Pao76LfsR89aXsDLOQvNnfbHj8ElINAcEkeyN3T15tDmUUUwFDFdOdVK8NxZ60ciJe81cNYcFH3kwvxS6CryMmb6W+owek16DiPGZc2jZCmsYo2z/VCmCpCwTuzTY9tFTra1yUA1ypNO7gDFQf1DK62NFZ0QEq1AQVBt78YYozrwcVojODjR57hNSsr7i3zVHcyCVo6tUKruaIKmo09jZjyVyZm6rHEbyra29o5XG0NkzJCo6mzKgyler07jXJl6ltvgGW1J9YpvR1SMyj0bKpnOKk12ua3iVq7tOlRkWK027RR1mP1J70J299oot5dlyg9Mt+O63POy6b2Y508SmnrKE+shmoVoRnZI3jxK4gCoV0XB0CYUkNlFNF3FOog9qVR5iVNy3HUdhvQE6rnm54odWs9uijOvHopSZzcUHqWyiVaPUuPunaoPSkqiT8k214OmknstihFyJT3tJRYEJ1oVGq2x4KYS7mhvJSpjsrjRSUpxXUbBubdpTnPUHzjFOFdeG4nsRkWDXYJhOKHbvTzmppUXbskRgmMGKKwhNwlIPZc7PqYKS6qquzrtRqlcLFKHxGyMtgta5j/ACotztCGKDe18MFSXN7hCaPT6hnnUS/pbeIzPvTz5TEDMd8HxCxRrFN6VV9HEk+qR6LY+UgcBOCtKN6H5LyZlUjEFTbXa7mnP2n3oPomt4i+phLk9Pe1QqjmzErP2/lIXAAme/3lCua7pkJY4p3T2OlOKVrcuqjccFGqN4qmG0HA54ptW/fIOgMrXjxyXJlyTg1syfcWLXZhQ27IbEQu1NuMA0B7fgpjK4cN5pkLXCcq9jJkgr9zK39m5pPo9XMKvc5bdz8ZjH3ahV/mFKd4tnGY01mVqhmdboySxLwyiswC1wiXaLtjUpyQ/grg2zQ5rmgYZzjKpbvZZGLZOPL4q0ZaiMo0W1s5pEtKK4Klt9nlrsXGIxjAj2qyp1gMJywSuIVMOShbo4BcdVEJ1O2wLmns+CV1Hdjq5ukArW7HdfJBo2IEymS4PdJUgVcM5T+NmJw9yH5u0EzxwUgEDIJOg/ouXtuQwGfW70JSXDDGLdtA6lUOw1XXtbGWKjUQG56+CJAynFDYZNkZ7BOS6pAocvaku1r3DofsFFbWUdlXms7Tu+KsLa4nVZZRNEJF/bVFKD+9U9CopYqnq6/n5hZZRNcZbFpTr8x+qZUrjP5KrxVjjw+eS46vOcdqTTuO5bFky4+cfen1LrBU7rqEGpexrHP5ySvFbHWakTbq6+QqW4rfJhOq3k4D3k9qratVa8WKjLly2GNRc6RRTUTTUVdBLuEzpU01FFFRd6RHSK5kptaMlZ222iBB8f0hUJeuF6WWJMeOZx4NI7aLSZw7P8qLc3c5FUzaq70qWOOjpZdRINRWGzdtmmQ0+rzKpXPQHuVWk1TIqVO0bqhtyi8xiOtWNO2D43TmvMmViDPuCtLPblRmAcQpvHJL4GUU4t/GjbXFkR84qO+0PDwWYdtpxdvEAlWFLymJhrtDpHvXLvJHNYWyxr7LJkGQYwwCq6lhUbh71JrbdJMgntEexRqN06cXap8c8vknkx4VwNbTLDjMcCj/AEgJA9URp8ISurmQcO0qA9pV4x1r4iMpaH8B27eS4kHmhPuhAjE6wmueVHICrGFEpZLJrNoQ04T7QhO2m8iMY7FG3tEwvXdpN7hWZpUh1S7cBiF2lfQQeGiH0vdwUd5CLgcpk+ptUycfBJVRhJJ2UV7khUmklW9lSPBVlvVxnkptO/0Gg4Yfqsc262NWOMb3L6ybjBKLdgNKztHajs4J7s+Q0Tqu1Huz3WjkpaJXuV1wrYsat2OtMN4Dry1KpKlccUHziDI8E6xom5svn3PzKh1a8anjn4KvFzjjykY49a7UqjDHDh8lOo0I5MlOq4etr1ZoLnc0Bzurs9y456okTYXeTS5DBXU1AsfvpdIhEpm8gEkdIl0ijb67voHUHL0hUUcuXN5AJJ6RNc9A3lwuQs6g8pIAei06oTpgcSQx0DFNNVDfVlNKaxaJTK5GqOLsakdirCmwuOovad6DgpIujyWdZVIyUinc8SuA00XouGHMBCFNrsjCjUIOMptd0ZLk64YHG1ugtWgBqor0ze4Ib3FWUiLiOcUB5XHPQ3OXOQ8YCLkkIuSQ1FNIxtZOZXOhhJJYzVR3f5p2+kkiJQ0vTd9JJcGhBycHJJJkChweu7ySSZCsc1ydKSSYRjHlDJSSSsZHJXJSSSjnZSlcSQOFKUpJIMIwlLeSSQQRzHom8upJ0xJIUrspJJxAbinMKSS4ZrYN08JzrqUkkGKkDFxC6+5lcSQbH0oYXpjnLiSNsCSBlySSSFsej//Z',
    name: 'Atal Bihari Vajpayee',
    info: 'Prime Minister of India',
  },
  {
    year: 2022,
    title: 'Historic Win for National',
    description: 'In 2014, the National won a landslide victory in the general elections, with Narendra Modi becoming the Prime Minister.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4ItnHpJivB6Xyu0_DQnY43uFV1cNKc7TaA&s',
    name: 'Narendra Modi',
    info: 'Prime Minister of India',
  },
  {
    year: 2023,
    title: 'Second Term for Narendra Modi',
    description: 'The National, under the leadership of Narendra Modi, won the 2019 general elections, securing a second term in office.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BjFcg6Sp0FkUslmmrCuWQQPFlTn0e23efg&s',
    name: 'Narendra Modi',
    info: 'Prime Minister of India',
  },
];

const FullScreenBackgroundItem = ({ item }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${item.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  };

  return (
    <div className="oj-item" style={backgroundImageStyle}>
      <div className="oj-item-content">
        <div className="text-container">
          <h1>{item.title}</h1>
          <h2>{item.year}</h2>
          <p>{item.description}</p>
          {item.info && <p className="info">{item.info}</p>}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentItem, setCurrentItem] = useState(data[0]);

  return (
    <div className="view-content">
      <NavigationBar />
      <TransitionGroup>
        <CSSTransition key={currentItem.year} timeout={500} classNames="fade">
          <FullScreenBackgroundItem item={currentItem} />
        </CSSTransition>
      </TransitionGroup>
      <div className="oj-slide-nav">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`oj-nav-item ${currentItem.year === item.year ? 'active' : ''}`}
              onClick={() => setCurrentItem(item)}
            >
              <span>{item.year}</span>
            </div>
            {index < data.length - 1 && (
              <>
                <div className="scale-line"></div>
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="small-scale-line"></div>
                ))}
              </>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="center-image-container">
        <img src={logo} alt="Logo" className="center-image" />
      </div>
    </div>
  );
};

export default App;
