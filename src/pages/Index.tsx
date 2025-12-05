import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [bookings, setBookings] = useState<string[]>([]);

  const languages = [
    { 
      name: 'Английский', 
      icon: '🇬🇧', 
      level: 'A1 - C2', 
      students: 450,
      description: 'Самый востребованный язык в мире',
      price: '1500 ₽/час'
    },
    { 
      name: 'Испанский', 
      icon: '🇪🇸', 
      level: 'A1 - B2', 
      students: 280,
      description: 'Второй по популярности язык',
      price: '1400 ₽/час'
    },
    { 
      name: 'Немецкий', 
      icon: '🇩🇪', 
      level: 'A1 - C1', 
      students: 320,
      description: 'Язык возможностей в Европе',
      price: '1500 ₽/час'
    },
    { 
      name: 'Французский', 
      icon: '🇫🇷', 
      level: 'A1 - B2', 
      students: 240,
      description: 'Язык искусства и культуры',
      price: '1400 ₽/час'
    },
  ];

  const schedule = [
    { id: '1', time: '10:00', language: 'Английский', level: 'A2', teacher: 'Мария Иванова', available: 3 },
    { id: '2', time: '12:00', language: 'Испанский', level: 'B1', teacher: 'Карлос Гарсия', available: 5 },
    { id: '3', time: '14:00', language: 'Немецкий', level: 'A1', teacher: 'Ханс Мюллер', available: 2 },
    { id: '4', time: '16:00', language: 'Французский', level: 'B2', teacher: 'Софи Дюпон', available: 4 },
    { id: '5', time: '18:00', language: 'Английский', level: 'C1', teacher: 'Джон Смит', available: 1 },
    { id: '6', time: '20:00', language: 'Испанский', level: 'A1', teacher: 'Изабелла Родригес', available: 6 },
  ];

  const benefits = [
    { icon: 'Video', title: 'Онлайн-занятия', description: 'Учитесь из любой точки мира' },
    { icon: 'Users', title: 'Носители языка', description: 'Преподаватели из разных стран' },
    { icon: 'Calendar', title: 'Гибкий график', description: 'Выбирайте удобное время' },
    { icon: 'Award', title: 'Сертификаты', description: 'Подтверждение уровня знаний' },
  ];

  const handleBooking = (lessonId: string) => {
    if (!bookings.includes(lessonId)) {
      setBookings([...bookings, lessonId]);
      setSelectedLesson(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              В
            </div>
            <span className="font-heading font-bold text-2xl">Вверх</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Курсы</a>
            <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <Button size="sm">Войти</Button>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Более 1000 студентов уже с нами
          </Badge>
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Изучайте языки онлайн
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональные преподаватели, индивидуальный подход и гибкий график обучения для достижения ваших целей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg h-14 px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8">
              <Icon name="Calendar" className="mr-2" size={20} />
              Пробный урок
            </Button>
          </div>
        </div>
      </section>

      <section id="courses" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-heading font-bold text-4xl mb-4">Наши курсы</h2>
          <p className="text-muted-foreground text-lg">Выберите язык и начните обучение уже сегодня</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {languages.map((lang, index) => (
            <Card 
              key={lang.name} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-5xl mb-3">{lang.icon}</div>
                <CardTitle className="font-heading text-2xl">{lang.name}</CardTitle>
                <CardDescription>{lang.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BarChart" size={16} className="text-primary" />
                    <span>Уровни: {lang.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span>{lang.students} студентов</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="font-semibold text-lg text-primary">{lang.price}</div>
                  </div>
                  <Button className="w-full mt-4">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="benefits" className="container mx-auto px-4 py-16 bg-white/50 rounded-3xl my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-4xl mb-12 text-center">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4">Расписание занятий</h2>
            <p className="text-muted-foreground text-lg">Выберите удобное время и запишитесь на урок</p>
          </div>
          <div className="grid gap-4">
            {schedule.map((lesson, index) => (
              <Card 
                key={lesson.id} 
                className={`hover:shadow-lg transition-all duration-300 animate-slide-up ${
                  bookings.includes(lesson.id) ? 'border-secondary border-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon name="Clock" size={28} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-heading font-semibold text-xl">{lesson.time}</h3>
                          <Badge variant="secondary">{lesson.level}</Badge>
                        </div>
                        <p className="text-lg font-medium">{lesson.language}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <Icon name="User" size={14} />
                          {lesson.teacher}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Мест осталось</div>
                        <div className="font-semibold text-lg">{lesson.available}</div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => setSelectedLesson(lesson.id)}
                            disabled={bookings.includes(lesson.id)}
                            variant={bookings.includes(lesson.id) ? "secondary" : "default"}
                          >
                            {bookings.includes(lesson.id) ? (
                              <>
                                <Icon name="Check" className="mr-2" size={16} />
                                Записан
                              </>
                            ) : (
                              <>
                                <Icon name="CalendarPlus" className="mr-2" size={16} />
                                Записаться
                              </>
                            )}
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="font-heading text-2xl">Запись на урок</DialogTitle>
                            <DialogDescription>
                              Подтвердите запись на урок {lesson.language} в {lesson.time}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="p-4 bg-accent rounded-lg space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Язык:</span>
                                <span className="font-semibold">{lesson.language}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Уровень:</span>
                                <span className="font-semibold">{lesson.level}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Время:</span>
                                <span className="font-semibold">{lesson.time}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Преподаватель:</span>
                                <span className="font-semibold">{lesson.teacher}</span>
                              </div>
                            </div>
                            <Button 
                              className="w-full" 
                              size="lg"
                              onClick={() => handleBooking(lesson.id)}
                            >
                              <Icon name="CheckCircle" className="mr-2" size={20} />
                              Подтвердить запись
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t mt-20 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                В
              </div>
              <span className="font-heading font-bold text-xl">Вверх</span>
            </div>
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>© 2024 Вверх. Все права защищены.</p>
              <p className="mt-1">Онлайн-школа иностранных языков</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;