import Image from 'next/image';
import { FC } from 'react';

const Aboutus: FC = () => {
  return (
    <section className="bg-gray-100 py-8 md:py-16">
      <div className="container mx-auto">
        <h1 className="font-serif text-black flex justify-center text-3xl mb-4">What our students say</h1>
        <div className="testimonial-carousel">
          {/* Student Card 1 */}
          <div className="testimonial-card bg-violet rounded-lg shadow-xl text-white">
            <div className="px-8 py-6">
              <div className="flex items-center mb-4">
                <Image src="/image-daniel.jpg" alt="Daniel Clifford" width={28} height={28} className="h-7 w-7 mr-4 rounded-full border-2 border-solid border-violet-light" />
                <div>
                  <h2 className="text-sm font-semibold">Daniel Clifford</h2>
                  <p className="text-xs opacity-70">Verified Graduate</p>
                </div>
              </div>
              <p className="text-xl leading-6 font-semibold mb-4">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>
              <p className="text-sm opacity-70">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
            </div>
          </div>

          {/* Student Card 2 */}
          <div className="testimonial-card bg-gray-500 rounded-lg text-white shadow-xl">
            <div className="px-8 py-6">
              <div className="flex items-center mb-4">
                <Image src="/image-jonathan.jpg" alt="Jonathan Walters" width={28} height={28} className="h-7 w-7 mr-4 rounded-full" />
                <div>
                  <h2 className="text-sm font-semibold">Jonathan Walters</h2>
                  <p className="text-xs opacity-70">Verified Graduate</p>
                </div>
              </div>
              <p className="text-xl leading-6 font-semibold mb-4">The team was very supportive and kept me motivated</p>
              <p className="text-sm opacity-70">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
            </div>
          </div>

          {/* Student Card 3 */}
          <div className="testimonial-card bg-white rounded-lg text-gray-700 shadow-xl">
            <div className="px-8 py-6">
              <div className="flex items-center mb-4">
                <Image src="/image-jeanette.jpg" alt="Jeanette Harmon" width={28} height={28} className="h-7 w-7 mr-4 rounded-full" />
                <div>
                  <h2 className="text-sm font-semibold">Jeanette Harmon</h2>
                  <p className="text-xs opacity-70">Verified Graduate</p>
                </div>
              </div>
              <p className="text-xl leading-6 font-semibold mb-4">An overall wonderful and rewarding experience</p>
              <p className="text-sm opacity-70">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
            </div>
          </div>

          {/* Student Card 4 */}
          <div className="testimonial-card bg-gray-800 rounded-lg text-white shadow-xl">
            <div className="px-8 py-6">
              <div className="flex items-center mb-4">
                <Image src="/image-patrick.jpg" alt="Patrick Abrams" width={28} height={28} className="h-7 w-7 mr-4 rounded-full border-2 border-solid border-violet-light" />
                <div>
                  <h2 className="text-sm font-semibold">Patrick Abrams</h2>
                  <p className="text-xs opacity-70">Verified Graduate</p>
                </div>
              </div>
              <p className="text-xl leading-6 font-semibold mb-4">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>
              <p className="text-sm opacity-70">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>
            </div>
          </div>

          {/* Student Card 5 */}
          <div className="testimonial-card bg-white rounded-lg text-gray-700 shadow-xl">
            <div className="px-8 py-6">
              <div className="flex items-center mb-4">
                <Image src="/image-kira.jpg" alt="Kira Whittle" width={28} height={28} className="h-7 w-7 mr-4 rounded-full" />
                <div>
                  <h2 className="text-sm font-semibold">Kira Whittle</h2>
                  <p className="text-xs opacity-70">Verified Graduate</p>
                </div>
              </div>
              <p className="text-xl leading-6 font-semibold mb-4">Such a life-changing experience. Highly recommended!</p>
              <p className="text-sm opacity-70">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default  Aboutus;
