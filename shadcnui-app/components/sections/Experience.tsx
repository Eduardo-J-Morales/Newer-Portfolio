import { Card, CardContent, CardHeader, CardFooter, CardDescription, CardTitle} from '@/components/ui/card'
import { experiences } from '@/app/data/content'

export default function Experience() {
    return(
    <section className='py-20 px-4' id='experience'>
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-12'>Experience</h2>
            <div className='max-w-3xl mx-auto space-y-6'>
                {
                    experiences.map((exp, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className='flex justify-between items-start'>
                                    <div>
                                        <div className='text-xl'>{exp.title}</div>
                                        <div className='text-sm text-muted-foreground'>{exp.company}</div>
                                    </div>
                                    <div className='text-sm text-muted-foreground'>
                                        {exp.period}
                                    </div>
                                </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className='text-muted-foreground'>{exp.description}</p>
                          </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    </section>
    )
}