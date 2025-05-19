// import { useState } from 'react'
// import InputShowcase from './Components/Input/Input'
// import styles from './App.module.css'
// import Button from './Components/Button/Button'
// import { Link } from './Components/Link/Link'
// import { Checkbox } from './Components/Checkbox/Checkbox'
// import TextArea from './Components/Textarea/Textarea'
// import TimeSelectMenu from './Components/SelectMenu/SelectMenu'
// import Dropdown from './Components/Dropdown/Dropdown'
// import ColorPicker from './Components/ColorPicker/ColorPicker'
// import { Modal } from './Components/Modal/Modal'
// import { Datepicker } from './Components/Calendar/Datepicker'
// import { Notification } from './Components/Toast/Notification'

// function App () {
//   const [isChecked, setIsChecked] = useState(false)
//   const [value, setValue] = useState('')
//   const [time1, setTime1] = useState('')
//   const [time2, setTime2] = useState('12:30')
//   const [time3, setTime3] = useState('')
//   const [dropdownValue, setDropdownValue] = useState('Week')
//   const [selectedColor, setSelectedColor] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [selectedDate, setSelectedDate] = useState('')
//   const [showNotification, setShowNotification] = useState(false)

//   const handleButtonClick = () => setShowNotification(true)
//   const handleCloseNotification = () => setShowNotification(false)
//   const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' }
//   ]

//   return (
//     <div className={styles.appContainer}>
//       {/* Кнопки */}
//       <div className={styles.componentSection}>
//         <h2>Buttons</h2>
//         <div className={styles.buttonGroup}>
//           <Button variant='primary'>Primary</Button>
//           <Button variant='primary' withIcon>
//             Primary with icon
//           </Button>
//           <Button variant='secondary'>Secondary</Button>
//           <Button variant='secondary' withIcon>
//             Secondary with icon
//           </Button>
//         </div>
//       </div>

//       {/* Поле ввода */}
//       <div className={styles.componentSection}>
//         <h2>Input Field</h2>
//         <InputShowcase />
//       </div>

//       {/* Ссылки */}
//       <div className={styles.componentSection}>
//         <h2>Links</h2>
//         <div className={styles.linkGroup}>
//           <Link href='https://example.com'>Default</Link>
//           <Link>Hover (наведи)</Link>
//           <Link pressed>Pressed (нажми)</Link>
//           <Link disabled>Disabled</Link>
//         </div>
//       </div>

//       {/* Чекбоксы */}
//       <div className={styles.componentSection}>
//         <h2>Checkboxes</h2>
//         <Checkbox
//           label='Принять условия соглашения'
//           checked={isChecked}
//           onChange={e => setIsChecked(e.target.checked)}
//         />
//         <Checkbox label='Неактивный чекбокс' disabled />
//       </div>

//       {/* Текстовая область */}
//       <div className={styles.componentSection}>
//         <h2>Text Area</h2>
//         <TextArea
//           label='Description'
//           value={value}
//           onChange={e => setValue(e.target.value)}
//           placeholder='Enter your description here...'
//         />
//       </div>

//       {/* Выпадающий список */}
//       <div className={styles.componentSection}>
//         <h2>Dropdown</h2>
//         <div className={styles.grid3col}>
//           <div>
//             <Dropdown
//               value={dropdownValue}
//               onChange={setDropdownValue}
//               options={['Day', 'Week']}
//               label='Default'
//             />
//           </div>
//           <div>
//             <Dropdown
//               value='Week'
//               onChange={setDropdownValue}
//               options={['Day', 'Week']}
//               label='Selected item'
//             />
//           </div>
//           <div>
//             <Dropdown
//               value={dropdownValue}
//               onChange={setDropdownValue}
//               options={['Day', 'Week']}
//               hovered
//               label='Hovered'
//             />
//           </div>
//         </div>
//         <Dropdown
//           value='Week'
//           onChange={setDropdownValue}
//           options={['Day', 'Week']}
//           disabled
//           label='Disabled state'
//         />
//       </div>

//       {/* Выбор времени */}
//       <div className={styles.componentSection}>
//         <h2>Time Select</h2>
//         <div className={styles.grid3col}>
//           <div>
//             <TimeSelectMenu
//               label='Выберите время'
//               value={time1}
//               onChange={setTime1}
//             />
//           </div>
//           <div>
//             <TimeSelectMenu
//               label='Время обеда'
//               value={time2}
//               onChange={setTime2}
//             />
//           </div>
//           <div>
//             <TimeSelectMenu
//               label='Время ужина'
//               value={time3}
//               onChange={setTime3}
//             />
//           </div>
//         </div>
//         <TimeSelectMenu
//           label='Недоступно'
//           value='15:45'
//           onChange={() => {}}
//           disabled
//         />
//       </div>

//       {/* Выбор цвета */}
//       <div className={styles.componentSection}>
//         <h2>Color Picker</h2>
//         <ColorPicker
//           selectedColor={selectedColor}
//           onColorChange={setSelectedColor}
//         />
//         {selectedColor && (
//           <p>
//             Selected color:{' '}
//             <span style={{ color: selectedColor }}>{selectedColor}</span>
//           </p>
//         )}
//       </div>

//       {/* Модальное окно */}
//       <div className={styles.componentSection}>
//         <h2>Modal</h2>
//         <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
//         <Modal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           title='Example Modal'
//         >
//           <p>This is the modal content. You can put anything here.</p>
//           <button onClick={() => alert('Button clicked!')}>Click me</button>
//         </Modal>
//       </div>

//       {/* Выбор даты */}
//       <div className={styles.componentSection}>
//         <h2>Date Picker</h2>
//         <Datepicker
//           value={selectedDate}
//           onChange={setSelectedDate}
//           placeholder='Choose date'
//         />
//         {selectedDate && (
//           <p>
//             Selected date: <strong>{selectedDate}</strong>
//           </p>
//         )}
//       </div>

//       {/* Уведомления */}
//       <div className={styles.componentSection}>
//         <h2>Notifications</h2>
//         <button onClick={handleButtonClick}>Показать уведомление</button>
//         <Notification
//           isVisible={showNotification}
//           message='Тестовая нотификация!'
//           onClose={handleCloseNotification}
//         />
//       </div>
//     </div>
//   )
// }

// export default App
